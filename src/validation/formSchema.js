import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(2, 'Name must be 2 characters long'),
    size: yup
        .string()
        .required('Size is required'),

    specialInstr: yup
        .string()
        .trim(),
      
        //Topings
    pepperoni: yup.boolean(),
    onions: yup.boolean(),
    sausage: yup.boolean(),
    mushrooms: yup.boolean(),
})

export default formSchema;