<!-- <template>
  <el-form
    ref="ruleFormRef"
    :model="formData"
    :rules="rules"
    label-width="auto"
    label-position="left"
    class="Article_Form"
    size="default"
    status-icon
  >
    <el-form-item label="博客标题" prop="title">
      <el-input v-model="formData.title" style="width: 240px" />
    </el-form-item>
    <el-form-item label="博客标签" prop="tags">
      <el-select-v2
        v-model="formData.tags"
        :options="tag_options"
        placeholder="请选择博客标签"
        style="width: 240px; margin-right: 16px; vertical-align: middle"
        allow-create
        filterable
        multiple
        clearable
        :reserve-keyword="false"
      />
    </el-form-item>
    <el-form-item label="文章概要">
      <el-input v-model="formData.summary" type="textarea" />
    </el-form-item>
    <el-form-item label="文章封面">
      <el-upload
        :limit="1"
        :on-exceed="handleExceed"
        action="#"
        list-type="picture-card"
        :auto-upload="false"
      >
        <el-icon><i-ep-Plus /></el-icon>

        <template #file="{ file }">
          <div>
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url"
              alt=""
            />
            <span class="el-upload-list__item-actions">
              <span
                class="el-upload-list__item-preview"
                @click="handlePictureCardPreview(file)"
              >
                <el-icon><i-ep-ZoomIn /></el-icon>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleDownload(file)"
              >
                <el-icon><i-ep-Download /></el-icon>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleRemove(file)"
              >
                <el-icon><i-ep-Delete /></el-icon>
              </span>
            </span>
          </div>
        </template>
      </el-upload>

      <el-dialog v-model="dialogVisible">
        <img w-full :src="dialogImageUrl" alt="Preview Image" />
      </el-dialog>
    </el-form-item>
    <el-form-item label="是否置顶" prop="setTop">
      <el-switch v-model="formData.priority" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        Create
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>
 -->
<!-- author: TOLIE -->
<!-- date: 2023-03-05 11:22:32 -->
<!-- description: 博客信息表单 -->
<template>
  博客信息表单
</template>

<script lang='ts' setup>
// import { onMounted } from "vue";

</script>

<style scoped lang='less'>

</style>