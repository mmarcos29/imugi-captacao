// import { firebaseDatabase } from './firebaseUtils'

// const FirebaseService = (nodePath, callback, size = 10) => {
//     let query = firebaseDatabase.ref(nodePath)
//     .limitToLast(size);
//     console.log(query)
//     query.on('value', dataSnapshot => {
//         let items = [];
//         dataSnapshot.forEach(childSnapshot => {
//             let item = childSnapshot.val();
//             item['key'] = childSnapshot.key;
//             items.push(item);
//         });
//         callback(items);
//     });

//     return query;

// }

// export default FirebaseService