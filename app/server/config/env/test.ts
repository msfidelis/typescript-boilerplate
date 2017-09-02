module.exports = {
	env: "test", 
	db: 'api-test',
	dialect: 'postgres',
	username: 'postgres', 
	password: 'example',
	host: '0.0.0.0',
	serverPort: process.env.PORT || 3000, 
	pgPort: 5432,
	dbURL: 'postgres://postgres:example@0.0.0.0:5432/api-test',
	secret: 'S3cr3t' 
};