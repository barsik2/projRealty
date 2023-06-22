echo "Swithing to branch main"
git checkout main

echo "building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* root@195.24.67.222:/var/www/195.24.67.222/

echo "Done!"