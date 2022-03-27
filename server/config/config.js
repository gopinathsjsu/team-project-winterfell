const config = {};

config.NODE_ENV = process.env.NODE_ENV
config.DBHOST = process.env.DBHOST
config.DBNAME = process.env.DBNAME
config.DBPASSWORD = process.env.DBPASSWORD
config.DBUSER = process.env.DBUSER
config.PORT = process.env.PORT
config.AUTHSOURCE = process.env.AUTHSOURCE
config.S3LINKADMIN = process.env.S3LINKADMIN
config.S3LINKCARD = process.env.S3LINKCARD
config.S3LINKLOGO = process.env.S3LINKLOGO
config.LIMIT = process.env.LIMIT

config.WEB_URL = process.env.WEB_URL

config.MAIL_TRANSPORT_METHOD = process.env.MAIL_TRANSPORT_METHOD
config.MAIL_HOST = process.env.MAIL_HOST
config.MAIL_PORT = process.env.MAIL_PORT
config.MAIL_USERNAME = process.env.MAIL_USERNAME
config.MAIL_PASSWORD = process.env.MAIL_PASSWORD
config.MAIL_SECURE_CONNECTION = process.env.MAIL_SECURE_CONNECTION
config.MAIL_FROM_NAME = process.env.MAIL_FROM_NAME
config.MAIL_FROM_EMAIL = process.env.MAIL_FROM_EMAIL

module.exports = config;
