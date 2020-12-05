<template>
  <div>
    <div>
			<van-cell-group title="基础用法">
				<van-cell title="单元格" value="内容" />
				<van-cell title="单元格" value="内容" label="描述信息" />
			</van-cell-group>
			<van-cell-group title="单元格大小">
				<van-cell title="单元格" value="内容" size="large" />
				<van-cell title="单元格" value="内容" label="描述信息" size="large" />
			</van-cell-group>
			<van-cell-group title="展示图标">
				<van-cell title="单元格" icon="location-o" />
			</van-cell-group>
			<van-cell-group title="只设置value">
				<van-cell value="内容" />
			</van-cell-group>
			<van-cell-group title="展示箭头">
				<van-cell title="单元格" is-link />
				<van-cell title="单元格" is-link value="内容" />
				<van-cell title="单元格" is-link arrow-direction="down" value="内容" />
			</van-cell-group>
			<van-cell-group title="页面导航">
				<van-cell title="URL 跳转" is-link url="/vant/mobile.html" />
				<van-cell title="路由跳转" is-link to="index" />
			</van-cell-group>
		</div>
		<div>
			<van-cell-group title="分组1">
				<van-cell title="单元格" value="内容" />
			</van-cell-group>
			<van-cell-group title="分组2">
				<van-cell title="单元格" value="内容" />
			</van-cell-group>
		</div>
		<div>
			<van-cell-group title="使用插槽">
				<van-cell value="内容" is-link>
					<template #title>
						<span class="custom-title">单元格</span>
						<van-tag type="danger">标签</van-tag>
					</template>
				</van-cell>
				<van-cell title="单元格" icon="shop-o">
					<template #right-icon>
						<van-icon name="search" class="search-icon" />
					</template>
				</van-cell>
			</van-cell-group>
			<van-cell-group>
				<van-cell center title="单元格" value="内容" label="描述信息" />
			</van-cell-group>
		</div>
  </div>
</template>

<script>
export default {
	data() {
		return {

		}
	}
}
</script>

<style>

</style>