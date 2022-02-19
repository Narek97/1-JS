const {Schema, model} = require('mongoose')

const courseSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  img: String,
  userId:{
    type:Schema.Types.ObjectId,
    // User bary petqa anpayman hamynkni models user.js um tvay anuni het
    ref:'User'
  }
})

// vor myus texery _id chgrenq ayl id grenq karanq esi chrenqe karevor chi i _id ogtagortenq
courseSchema.method('toClient',function(){
  const course = this.toObjectId()
  course.id = course._id
  delete course._id
  return course
})

module.exports = model('Course', courseSchema)