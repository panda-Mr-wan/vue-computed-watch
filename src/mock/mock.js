import Mock from "mockjs";
Mock.setup({ timeout: 4000 }); 
Mock.mock("data.php","post",function(){
    return Mock.mock({
        "data|1-6":[{
            "id|+1":88,
            "name|1":["tom","jarry","lucy","marry"],
            "sex|1":['男',"女"],
            "age|1":[14,12,15,16]
        }]
    })
})