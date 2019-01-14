import { Mongo } from 'meteor/mongo';

const students = new Mongo.Collection("students");

export default students;

// export default new Mongo.Collection("students");