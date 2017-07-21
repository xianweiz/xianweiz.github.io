#!/bin/sh

### README ####
##-- steps:
##--    1)kinit <account>
##--    2)aklog
##--    3)nohup $HOME/bin/krb_afs_renewal.sh &
##-- keytab creation: https://people.cs.pitt.edu/~xianeizhang/notes/mix.html, see 1(4)

PATH=/usr/kerberos/bin/:/usr/bin:$PATH
export PATH

#-- klist: list cached Kerberos tickets
#--  final output: Kerb principal, e.g., xianeizhang@DEPT.CS.PITT.EDU
curr_principal=`klist 2>/dev/null|egrep "Default principal" |awk '{print $3}'`
#echo $curr_principal
if [ "x$curr_principal" != "x" ]            #-- not empty
then
    count=1

    while true
    do
        #-- reobtain ticket every 100hrs
        if (( $count == 100 ));then
            #-- obtain and cache Kerberos ticket
            kinit $curr_principal -k -t $HOME/bin/xianeizhang.keytab
            #kinit xianeizhang@DEPT.CS.PITT.EDU -k -t $HOME/bin/xianeizhang.keytab
            count=0
        fi
        #-- renew token every 1h
        kinit -R                            #-- renew the ticket for further 25hrs
        aklog                               #-- get tokens for authentication to AFS (after having the ticket)
        sleep 3600
        count=$(( $count+1 ))
    done
fi
