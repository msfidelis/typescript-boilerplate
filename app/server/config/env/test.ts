module.exports = {

	env: "development", 
	db: 'api',
	dialect: 'postgres',
	username: 'postgres', 
	password: 'example',
	host: '0.0.0.0',
	serverPort: process.env.PORT || 3000, 
	pgPort: 5432,
	dbURL: 'postgres://postgres:pgroot@localhost:5432/api-test',
	secret: 'S3cr3t' 

};