import connectToDatabase from '../src/lib/mongodb.js';
import User from '../src/models/User.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { username, password, role } = req.body;

  if (!username || !password || !role) {
    return res.status(400).json({ error: 'Missing username, password, or role.' });
  }

  try {
    await connectToDatabase();

    // 1. Fallback Admin Account (prevents lockout if DB is empty)
    if (role === 'admin' && username === 'admin123' && password === 'password') {
      return res.status(200).json({
        id: 'fallback_admin',
        name: 'System Administrator',
        username: 'admin123',
        role: 'admin'
      });
    }

    // 2. Database Lookup
    const user = await User.findOne({ username, password, role });
    
    if (user) {
      return res.status(200).json({
        id: user._id.toString(),
        name: user.name,
        username: user.username,
        role: user.role,
        department: user.department,
        cohort: user.cohort
      });
    } else {
      return res.status(401).json({ error: 'Invalid credentials. Please check your username and password.' });
    }
  } catch (error) {
    console.error('Login API Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
