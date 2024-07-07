<script setup>
  const text = defineModel('text')
  defineProps({
      label: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: 'text'
      },
      placeholder: {
        type: String,
        default: ''
      },
      inputClass: {
        type: String,
        default: ''
      },
      id: {
        type: String,
        required: true
      }
    })
</script>

<template>
    <div class="form-group grid gap-1">
      <label :for="id" class="font-semibold">
        {{ label }}
      </label>
      <input
        :type="type"
        :placeholder="placeholder"
        :class="inputClass"
        :id="id"
        v-model="text"
        class="block bg-white w-full rounded-xl p-4"
        required
      />
    </div>
  </template>
  


  