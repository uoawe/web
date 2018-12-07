#!/bin/bash

# Set permission
rm -rf node_modules
find * -type d -print | xargs chmod 755
find * -type f -print | xargs chmod 644
chmod 744 deploy.sh


# Deploy to u-aizu server
function expect_password {
    expect -c "\
    set timeout 90
    set env(TERM)
    spawn $1
    expect \"Are you sure you want to continue connecting (yes/no)?\"
    send \"yes\r\"
    expect \"Password:\"
    send \"$PASS\r\"
    expect eof
  "
}


expect_password "sh -c \"scp -c aes128-cbc -r src/* $STUDENT_ID@sshgate.u-aizu.ac.jp:/home/web-ext/circle/suisougaku/public_html/.\""
