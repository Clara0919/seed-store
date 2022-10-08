<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col-11">
        <table class="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">商品名稱</th>
              <th scope="col">單價</th>
              <th scope="col">數量</th>
              <th scope="col">小計</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="img-box">
                <img
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1100&q=60"
                  alt=""
                />
              </td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.table {
  margin-top: 40px;
  text-align: center;
}

.img-box {
  width: 150px;
  height: 150px;
}
.img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: center;
}
</style>