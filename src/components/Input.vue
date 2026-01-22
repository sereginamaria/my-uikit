<script setup>

const emit = defineEmits(['update:value'])
defineProps({
  error: {
    type: Array,
    required: false
  },
  value: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  label: {
    type: String,
    required: true
  },
  width: {
    type: String,
    default: '300px'
  },
  placeholder: {
    type: String,
    default: ''
  }
})

const updateValue = (event) => {
  emit('update:value', event.target.value)
}
</script>

<template>
  <div class="form-input" :style="{'width': width}">
    <input class="input-text"
           :type="type"
           :name="name"
           :id="name"
           :placeholder="placeholder"
           :value="value"
           :label="label"
           @input="updateValue"
    />
    <label :for="name" class="input-label">{{label}}</label>
    <TransitionGroup>
      <div class="form-error"
           v-for="element in error" :key="element.$uid"
      >
        <div class="form-error__message">
          {{element.$message}}
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped lang="scss">
.form {
  &-input {
    position: relative;
  }
  &-error {
    background: var(--danger);
    margin-top: 4px;
    border-radius: 7px;
    font-size: 13px;
    color: #fff;
    padding: 5px;
  }
}
.input {
  &-text {
    border: 1px solid var(--primary);
    padding: 0 10px;
    height: 40px;
    border-radius: 7px;
    font-size: 15px;
    width: 100%;
    position: relative;
    z-index: 1;
    &:placeholder-shown {
      &::placeholder {
        opacity: 0;
      }
    }
    &:focus {
      &::placeholder {
        opacity: 1;
      }
      & + .input-label {
        z-index: 1;
        opacity: 1;
        top: -10px;
      }
    }
    &:not(:placeholder-shown) {
      & + .input-label {
        z-index: 1;
        opacity: 1;
        top: -10px;
      }
    }
  }
  &-label {
    font-weight: bold;
    display: block;
    position: absolute;
    top: 20px;
    left: 5%;
    translate: 0 -10px;
    z-index: 9;
    transition: .3s;
    font-size: 13px;
    color: var(--primary);
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>