const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const userSchema=new mongoose.Schema({
    name:{
    type:String,
    require:true,
},

    email:{
     type: String,
    require:true,
  
},

    password:{
    type:String,
    require:true,
  
}
})
userSchema.methods.generateAuthToken= function(){
const token=jwt.sign({_id:this._id},process.env.JWT_PRIVATEKEY)
return token;
}
const validate = (user) => {
	const schema = Joi.object({
		name: Joi.string().required().label("name"),
		email: Joi.string().email().required().label("email"),
		password:passwordComplexity().required().label("password"),
	});
	return schema.validate(user);
};
const User=mongoose.model('login',userSchema);

module.exports = {User, validate };
