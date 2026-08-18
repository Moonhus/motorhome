#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

if curl -sf --max-time 2 http://127.0.0.1:3000 >/dev/null; then
  echo "Dev server already running on :3000"
  exit 0
fi

npm run dev > /tmp/commercial-motorhomes-dev.log 2>&1 &
echo $! > /tmp/commercial-motorhomes-dev.pid

for _ in $(seq 1 40); do
  if curl -sf --max-time 2 http://127.0.0.1:3000 >/dev/null; then
    echo "Dev server ready on :3000"
    exit 0
  fi
  sleep 0.5
done

echo "Dev server failed to start" >&2
tail -n 80 /tmp/commercial-motorhomes-dev.log >&2 || true
exit 1
