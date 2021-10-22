import * as Yup from "yup";
const userSchema= Yup.object().shape({
    name: Yup.string().required(),
    age: Yup.number().min(1).max(150).required(),
    email: Yup.string().email().required(),
})
export default userSchema