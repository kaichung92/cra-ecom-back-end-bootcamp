INSERT INTO DECKS (roundid,deck,deckPosition) VALUES (
(SELECT roundid FROM Tableinfos WHERE roundid = 1),
"11121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859606162",
0);

SELECT * FROM DECKs;
SELECT * FROM playerhand;
SELECT * FROM tableinfos;
SELECT * FROM tableplayers;
SELECT * FROM tables;
SELECT * FROM transactions;
SELECT * FROM Users;

