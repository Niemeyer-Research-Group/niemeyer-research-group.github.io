<script lang="ts">
    export let to: string;
    export let ref: string = "noreferrer";
</script>

<a rel={ref} href={to} target="_blank"><slot></slot></a>
