const http = require('http');
const { Pool } = require('pg');
const url = require('url');

const pool = new Pool({
  user: "Raj0206",
  host: "localhost",
  database: "node_intern",
  password: "0206",
  port: 6784,
});

pool.connect().then(() => {
    console.log("Connected to PostgreSQL");
  }).catch((err) => {
    console.error("PostgreSQL Error:", err);
  });

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const method = req.method;

  // Create a new user
  console.log(parsedUrl.pathname)
  if (method === 'POST' && parsedUrl.pathname === '/ragister') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', async () => {
      const { name, email, password } = JSON.parse(body);
      try {
        const result = await pool.query(`INSERT INTO employe(name, email, password) VALUES ($1, $2, $3) RETURNING *`,[name, email, password]);  
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result.rows[0]));
      } catch (error) {
        console.error(error);
        res.writeHead(500);
        res.end('Server error');
      }
    });
  }

  // Get all users
  else if (method === 'GET' && parsedUrl.pathname === '/users') {
    try {
      const result = await pool.query(`SELECT * FROM employe`);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(result.rows));
    } catch (error) {
      console.error(error);
      res.writeHead(500);
      res.end('Server error');
    }
  }

  // Login a user by email
  else if (method === 'GET' && parsedUrl.pathname.startsWith('/login')) {
    console.log(parsedUrl)
    const email = parsedUrl.query.email;
    const password = parsedUrl.query.password;

    if (!email) {
      res.writeHead(400);
      res.end('Email is required');
      return;
    }
    if (!password) {
      res.writeHead(400);
      res.end('Password is required');
      return;
    }
    
    try {
      const result = await pool.query(`SELECT * FROM employe WHERE email = $1 and password = $2`,[email,password]);
      if (result.rows.length > 0) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result.rows[0]));
      } else {
        res.writeHead(404);
        res.end('User not found');
      }
    } catch (error) {
      console.error(error);
      res.writeHead(500);
      res.end('Server error');
    }
  }

  // Update a user
  else if (method === 'PUT' && parsedUrl.pathname.startsWith('/update')) {
    console.log(parsedUrl)
    const email = parsedUrl.query.email
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', async () => {
      const { name, password } = JSON.parse(body);
      try {
        const result = await pool.query(`UPDATE employe SET name = $1, password = $2 WHERE email = $3 RETURNING *`,[name,password,email]);
        if (result.rowCount > 0) {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ message: 'User updated successfully' }));
        } else {
          res.writeHead(404);
          res.end('User not found');
        }
      } catch (error) {
        console.error(error);
        res.writeHead(500);
        res.end('Server error');
      }
    });
  }

  // Delete a user
  else if (method === 'DELETE' && parsedUrl.pathname.startsWith('/delete/')) {
    console.log(parsedUrl.pathname)
    const email = parsedUrl.pathname.split('/')[2];
    try {
      const result = await pool.query(`DELETE FROM employe WHERE email = ${email}`);
      if (result.rowCount > 0) {
        res.writeHead(204);
        res.end();
      } else {
        res.writeHead(404);
        res.end('User not found');
      }
    } catch (error) {
      console.error(error);
      res.writeHead(500);
      res.end('Server error');
    }
  }

  // Handle 404
  else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
