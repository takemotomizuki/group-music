<script>
  let groupName = "";
</script>

<h1>新規グループを作成</h1>
<form action="" method="get">
  <div>
    <label for="group_name">グループ名を入力：</label>
    <input type="text" bind:value={groupName} name="group_name" id="group_name" required />
  </div>
  <div>
    <input type="submit" value="登録" />
  </div>
</form>
<a href="/group">戻る</a>