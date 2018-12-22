#########################################################################
-Note:
+ gulp 4.0.0 cannot work with this source, too many problem around so currently down grade to gulp 3.9.1
+ gulp-sass to 3.0.0, because not compatible with node 8.0
+ gulp dev to dev (auto watch change from source code)
+ gulp rebuild -> server to apply new changes
+ heroku will call
	1. npm install
	2. After install: gulp rebuild
	3. To start: npm start
	4. config command in package.json
