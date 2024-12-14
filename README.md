### **1. Set Up Express.js with MongoDB**
1. **Install Required Packages**:
   ```bash
   npm install express mongoose
   ```
   - **express**: For building the server.
   - **mongoose**: For connecting to MongoDB and managing schemas/models.

2. **Basic Express App**:
   ```javascript
   const express = require('express');
   const mongoose = require('mongoose');
   const bodyParser = require('body-parser');

   const app = express();

   // Middleware to parse JSON
   app.use(express.json());

   // MongoDB connection
   const DB_URI = 'mongodb://localhost:27017/mydatabase'; // Replace 'mydatabase' with your DB name
   mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => console.log('MongoDB connected!'))
     .catch(err => console.log('Error connecting to MongoDB:', err));

   // Start server
   const PORT = 3000;
   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
   ```

---

### **2. Create a Schema and Model**
1. **Define a Schema**:
   A schema defines the structure of the documents in the collection.
   ```javascript
   const mongoose = require('mongoose');

   const userSchema = new mongoose.Schema({
     name: { type: String, required: true },
     age: { type: Number, required: true },
     email: { type: String, required: true, unique: true }
   });

   // Create a model
   const User = mongoose.model('User', userSchema);

   module.exports = User;
   ```

---

### **3. Create a Collection and Add Data**
1. **Add Data to the Collection**:
   ```javascript
   const User = require('./models/User'); // Path to the model file

   app.post('/add-user', async (req, res) => {
     try {
       const userData = req.body; // { name: "John", age: 25, email: "john@example.com" }
       const user = new User(userData);
       const savedUser = await user.save();
       res.status(201).json({ message: 'User created successfully', data: savedUser });
     } catch (error) {
       res.status(400).json({ error: error.message });
     }
   });
   ```

---

### **4. Find Data (Queries)**
1. **Find All Documents**:
   ```javascript
   app.get('/users', async (req, res) => {
     try {
       const users = await User.find();
       res.status(200).json(users);
     } catch (error) {
       res.status(500).json({ error: error.message });
     }
   });
   ```

2. **Find One Document**:
   ```javascript
   app.get('/user/:id', async (req, res) => {
     try {
       const user = await User.findById(req.params.id);
       if (!user) {
         return res.status(404).json({ message: 'User not found' });
       }
       res.status(200).json(user);
     } catch (error) {
       res.status(500).json({ error: error.message });
     }
   });
   ```

3. **Find with a Condition**:
   ```javascript
   app.get('/users-by-age/:age', async (req, res) => {
     try {
       const users = await User.find({ age: req.params.age });
       res.status(200).json(users);
     } catch (error) {
       res.status(500).json({ error: error.message });
     }
   });
   ```

---

### **5. Update and Delete**
1. **Update Document**:
   ```javascript
   app.put('/user/:id', async (req, res) => {
     try {
       const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
       if (!updatedUser) {
         return res.status(404).json({ message: 'User not found' });
       }
       res.status(200).json(updatedUser);
     } catch (error) {
       res.status(500).json({ error: error.message });
     }
   });
   ```

2. **Delete Document**:
   ```javascript
   app.delete('/user/:id', async (req, res) => {
     try {
       const deletedUser = await User.findByIdAndDelete(req.params.id);
       if (!deletedUser) {
         return res.status(404).json({ message: 'User not found' });
       }
       res.status(200).json({ message: 'User deleted successfully' });
     } catch (error) {
       res.status(500).json({ error: error.message });
     }
   });
   ```