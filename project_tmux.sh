SESSION_NAME="APPNAME"

tmux new-session -d -s $SESSION_NAME -n "frontend"

tmux new-window -t $SESSION_NAME:2 -n "backend"
tmux new-window -t $SESSION_NAME:3 -n "fronend"

tmux select-window -t $SESSION_NAME:2
tmux send-keys "cd frontend && yarn install && yarn start" C-m


tmux select-window -t $SESSION_NAME:3
tmux send-keys "cd backend-api && yarn install && yarn start:dev" C-m

tmux select-window -t $SESSION_NAME:1

tmux -2 attach-session -t $SESSION_NAME