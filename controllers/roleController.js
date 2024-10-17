const Role = require('../models/Role');

exports.getRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json({ roles });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch roles', error });
  }
};

exports.getRoleById = async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);
    if (!role) {
      return res.status(404).json({ message: 'Role not found' });
    }
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch role', error });
  }
};

exports.createRole = async (req, res) => {
  const { role, users } = req.body;
  try {
    const newRole = new Role({ role, users });
    await newRole.save();
    res.status(201).json(newRole);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create role', error });
  }
};

exports.updateRole = async (req, res) => {
  try {
    const updatedRole = await Role.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRole) {
      return res.status(404).json({ message: 'Role not found' });
    }
    res.status(200).json(updatedRole);
  } catch (error) {
    res.status(400).json({ message: 'Failed to update role', error });
  }
};

exports.deleteRole = async (req, res) => {
  try {
    const deletedRole = await Role.findByIdAndDelete(req.params.id);
    if (!deletedRole) {
      return res.status(404).json({ message: 'Role not found' });
    }
    res.status(200).json({ message: 'Role deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete role', error });
  }
};
