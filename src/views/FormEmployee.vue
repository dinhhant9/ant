<template>
  <div>
    <a-card :title="$t('employeeInfomation')">
    <!-- <a href="#" slot="extra">more</a> -->

  
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item label="Name" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="[
          'name',
          {rules: [{ required: true, message: 'Please select your name!' }]}
        ]"
          />
        </a-form-item>
        <a-form-item label="Gender" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-select
            v-decorator="[
          'gender',
          {rules: [{ required: true, message: 'Please select your gender!' }]}
        ]"
            placeholder="Select a option and change input text above"
            @change="handleSelectChange"
          >
            <a-select-option value="Male">Male</a-select-option>
            <a-select-option value="Female">Female</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="URL avatar" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="[
          'avatar',
          {rules: [{ required: false, message: 'Please input your note!' }]}
        ]"
          />
        </a-form-item>

        <a-form-item label="Birthday" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-date-picker
            v-decorator="['datepicker', {rules: [{ type: 'object', required: true, message: 'Please select time!' }]}]"
          />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
      </a-form>
</a-card>
  </div>
</template>

<script>
import EmployeeServices from '../services/employeeServices'
export default {
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this),
      employee: { name: "", gender: "", birthday: "", urlAvatar: "" }
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
         if (!err) {

            console.log(values);
            
             this.employee.name = values.name
             this.employee.gender = values.gender
             this.employee.urlAvatar = values.avatar
             this.employee.birthday = values.datepicker.format('x')

             if(!this.employee.urlAvatar)
             {
                 this.employee.urlAvatar = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
             }

             EmployeeServices.postEmployee(this.employee).then(res =>{
                 console.log(res);
                 this.$router.push({name: 'employee'})
                 
             })
        //   console.log(
        //     "Received values of form: ",
        //     values.datepicker.format("x")
        //   );
         }


      });
    },
    handleSelectChange(value) {
      console.log(value);
    }
  }
};
</script>