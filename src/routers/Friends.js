const express = require('express')
const router = new express.Router()
const { searchForUsers } = require('../background-functions/search-for-users')
const { addFriend, removeFriend, sendInvitation } = require('../background-functions/add-user-to-friend-list')
const { getFriends, getFriendRequestInProccess } = require('../background-functions/fetch-friends')
const { auth } = require('../middleware/Log-in-Auth')

// Status: 'Success', Reason: '.......', Details: '.....', Message: '......'
// Status: 'Failure', Reason: '.......', Details: '.....', Message: '......'
// Status: 'Error', Reason: '.......', Details: '.....', Message: '......'


/**
 * 
 * 
 */
router.post('/sendInvitation', auth, async function (req, res) {
    const { status, reason, details, message } =  await sendInvitation(req.body.myProfileID, req.body.hisProfileID)
    
//  We send those values to the client IF their is not error throwen during the logIn() process
    res.send({ 
        Status: status, 
        Reason: reason, 
        Details: details, 
        Message: message
    });
    
})


router.post('/addFriend', auth, async function (req, res) {

    const { status, reason, details, message } =  await addFriend(req.body.myProfileID, req.body.hisProfileID)
    
//  We send those values to the client IF their is not error throwen during the logIn() process
    res.send({ 
        Status: status, 
        Reason: reason, 
        Details: details, 
        Message: message
    });
    
})

router.post('/removeFriend', auth, async function (req, res) {

    const { status, reason, details, message } =  await removeFriend(req.body.myProfileID, req.body.hisProfileID)
    
//  We send those values to the client IF their is not error throwen during the logIn() process
    res.send({ 
        Status: status, 
        Reason: reason, 
        Details: details, 
        Message: message
    });
    
})



router.post('/findUser' , auth, async function (req, res) {

    const { status, reason, details, message } =  await searchForUsers(req.body.word)

//  We send those values to the client IF their is not error throwen during the logIn() process
    res.send({ 
        Status: status, 
        Reason: reason, 
        Details: details, 
        Message: message
    });


})


router.post('/fetchFriends', auth, async function (req, res) {

    const { status, reason, details, message } =  await getFriends(req.body.myProfileID)
    
//  We send those values to the client IF their is not error throwen during the logIn() process
    res.send({ 
        Status: status, 
        Reason: reason, 
        Details: details, 
        Message: message
    });
    
})

router.post('/fetchFriendsRequest', auth, async function (req, res) {
    const { status, reason, details, message } =  await     getFriendRequestInProccess(req.body.myProfileID)
    
    //  We send those values to the client IF their is not error throwen during the logIn() process
        res.send({ 
            Status: status, 
            Reason: reason, 
            Details: details, 
            Message: message
        });

})


module.exports = router
