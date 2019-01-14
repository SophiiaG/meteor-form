import { Template } from 'meteor/templating';
import students from '../imports/db/students';

Template.form.events (
  {
    "click #submit" : function(event, template) {
      students.insert (
        {
          firstname : template.find("#firstname").value,
          lastname : template.find("#lastname").value,
          github : template.find("#git").value
        }
      )
    }
  }
)