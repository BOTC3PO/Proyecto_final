const crypto = require("crypto");

const password = process.argv[2];

const HASH_PREFIX = "pbkdf2";
const HASH_ITERATIONS = 100000;
const HASH_KEY_LENGTH = 32;
const HASH_DIGEST = "sha256";

const salt = crypto.randomBytes(16).toString("hex");

const derived = crypto
  .pbkdf2Sync(password, salt, HASH_ITERATIONS, HASH_KEY_LENGTH, HASH_DIGEST)
  .toString("hex");

console.log(`${HASH_PREFIX}$${HASH_ITERATIONS}$${salt}$${derived}`);
