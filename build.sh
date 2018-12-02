if [[ ! -d ./node_modules ]]; then
  echo "[build.sh] Installing npm Modules"
	npm install
	wait
fi

echo "[build.sh] Creating dev server at port 8080"
npm run serve
