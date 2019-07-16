<template>
  <div>
    <a-button class="editable-add-btn" @click="handleAdd">{{$tc('buttonEmployee',0)}}</a-button>
    <a-table bordered :loading="isLoading" :dataSource="dataSource" :columns="columns">
      <template slot="avatar" slot-scope="text, record">
        <a-avatar :src="record.urlAvatar" />
      </template>

      <template slot="birthday" slot-scope="text, record">
        <p>{{formatBirthday(record.birthday)}} </p>
      </template>

      <template slot="operation" slot-scope="text, record">
        <a href="javascript:;">{{$tc('buttonEmployee', 1)}}</a>
        <a-divider type="vertical" />
        <a-popconfirm
          v-if="dataSource.length"
          title="Sure to delete?"
          @confirm="() => onDelete(record.id)"
        >
          <a>{{$tc('buttonEmployee', 2)}}</a>
        </a-popconfirm>
      </template>
    </a-table>
  </div>
</template>
<script>
import moment from 'moment'
import EmployeeServices from "../services/employeeServices";
export default {
  created() {
    this.getData();
  },
  data() {
    return {
      isLoading: false,
      dataSource: [
        {
          key: "",
          name: "",
          gender: "",
          birthday: "",
          urlAvatar: ""
        }
      ],

      columns: [
        {
          title: "Avatar",
          dataIndex: "avatar",
          width: "10%",
          className: "column-center",
          scopedSlots: { customRender: "avatar" }
        },
        {
          title: "Name",
          dataIndex: "name",
          width: "30%"
        },
        {
          title: "Gender",
          dataIndex: "gender",
          width: "20%"
        },
        {
          title: "Birthday",
          dataIndex: "birthday",
          width: "20%",
          scopedSlots: { customRender: "birthday" }
        },
        {
          title: "Action",
          dataIndex: "action",
          className: "column-center",
          scopedSlots: { customRender: "operation" },
          width: "20%"
        }
      ]
    };
  },
  methods: {
    getData() {
      this.isLoading = true;
      EmployeeServices.getAllEmployee()
        .then(res => {
          //Create new prop named key and let it compare id
          for (var i = 0; i < res.length; i++) {
            res[i].key = res[i].id;
          }
          this.dataSource = res;
          this.isLoading = false;
        })
        .catch(e => {
          console.log(e);
        });
    },

    onDelete(id) {
      EmployeeServices.deleteEmployeeByID(id)
        .then(res => {
          this.getData();
          console.log(res);
        })
        .catch(e => {
          console.log(e);
        });
    },
    formatBirthday: function() {

      //console.log(birthdayNumber);
      return moment(1562152153473).format("DD MMMM YYYY");
       
    },
    handleAdd() {
      this.$router.push({ name: "formEmployee" });
    }
  }
};
</script>

<style>
.editable-add-btn {
  margin-bottom: 8px;
}
th.column-center,
td.column-center {
  text-align: center !important;
}
</style>
