import { Template } from "meteor/templating";
import students from "../imports/db/students"; // import de la base de donnée 

Template.students.helpers (
  {
    all_students : function() { // retourne la totalité des élements qui sont dans la base de donnée students
      return students.find();
    }
  }
)