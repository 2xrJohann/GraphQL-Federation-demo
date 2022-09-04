import  UserList from "../schema/userlist.js";
const resolvers = {

    Query: {
        getUsers:() => {
            return UserList;    
        },

        //TODO dive into parent, info, seek example usages of ctx
        getUser:(parent, args, context, info) => {
            var user = UserList.find(obj => {
                return obj.username === args.name
              });

            return user;
        }
    },

    Mutation: {
        createUser:(parent, args) => {
            if (UserList.length >20) {
                return
            }

            var lastId = parseInt(UserList[UserList.length - 1].id) ?? 0;
            UserList.push({
                id: lastId++,
                username: args.input.username,
                chatScore: args.input.chatScore,
                attendanceRating: args.input.attendanceRating
            });
            
            return UserList[UserList.length -1];
        },

        deleteUser:(parent, args) => {
            var user = UserList.find(function (user) {
                return user.id == args.input;
            });

            UserList.splice(UserList.indexOf(user) , 1);

            return user;
        }
    },
}

export default resolvers;