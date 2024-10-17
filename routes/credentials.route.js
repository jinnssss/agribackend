const express = require('express');
const { getCredentials, createCredential, updateCredential, deleteCredential } = require('../controllers/credentials.controller');
const router = express.Router();

router.get('/', getCredentials);
router.post('/', createCredential);
router.put('/:credentialId', updateCredential);
router.delete('/:credentialId', deleteCredential);

module.exports = router;
