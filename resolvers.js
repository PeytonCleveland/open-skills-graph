var admin = require("firebase-admin");

var serviceAccount = require("./service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const resolvers = {
  Query: {
    async rootSkill() {
      const root = await admin
        .firestore()
        .collection("skills")
        .doc("MafGLamyjwnbZK4P6lUb")
        .get();
      return root.data();
    },

    async children(_, id) {
      const parent = await admin
        .firestore()
        .collection("skills")
        .doc(id.id)
        .get();

      const childrenIds = parent.data().children;
      const children = [];
      for (const id of childrenIds) {
        const child = await admin
          .firestore()
          .collection("skills")
          .doc(id)
          .get();

        children.push(child.data());
      }
      return children;
    },
  },
};

module.exports = resolvers;
