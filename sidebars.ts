const sidebars: SidebarsConfig = {
  docs: [
    "index",

    {
      type: "category",
      label: "Getting Started",
      items: [
        { type: "doc", id: "getting-started/getting-started_hello-world" },
        { type: "doc", id: "getting-started/getting-started_installation" },
        { type: "doc", id: "getting-started/getting-started_cli-usage" },
        { type: "doc", id: "getting-started/getting-started_editor-setup" }
      ]
    },

    {
      type: "category",
      label: "Language",
      items: [
        { type: "doc", id: "language/language_overview" },
        { type: "doc", id: "language/language_syntax" },

        { type: "doc", id: "language/language_variables" },
        { type: "doc", id: "language/language_types" },
        { type: "doc", id: "language/language_type-aliases" },

        { type: "doc", id: "language/language_functions" },
        { type: "doc", id: "language/language_lambdas" },
        { type: "doc", id: "language/language_generics" },

        { type: "doc", id: "language/language_structs" },
        { type: "doc", id: "language/language_enums" },
        { type: "doc", id: "language/language_unions" },
        { type: "doc", id: "language/language_tuples" },

        { type: "doc", id: "language/language_arrays" },
        { type: "doc", id: "language/language_ranges" },

        { type: "doc", id: "language/language_pointers" },
        { type: "doc", id: "language/language_memory-management" },

        { type: "doc", id: "language/language_control-flow" },
        { type: "doc", id: "language/language_expressions" },
        { type: "doc", id: "language/language_operators" },

        { type: "doc", id: "language/language_error-handling" },

        { type: "doc", id: "language/language_modules" },
        { type: "doc", id: "language/language_namespaces" },

        { type: "doc", id: "language/language_doc-comments" },

        { type: "doc", id: "language/language_comptime" },
        { type: "doc", id: "language/language_concurrency" },

        {
          type: "category",
          label: "Intrinsics",
          items: [
            { type: "doc", id: "language/language_intrinsics" },
            { type: "doc", id: "language/intrinsics/language_intrinsics_atomic" },
            { type: "doc", id: "language/intrinsics/language_intrinsics_io" },
            { type: "doc", id: "language/intrinsics/language_intrinsics_sys" },
            { type: "doc", id: "language/intrinsics/language_intrinsics_unsafe" }
          ]
        },

        { type: "doc", id: "language/language_inline_asm" }
      ]
    },

    {
      type: "category",
      label: "Standard Library",
      items: [
        { type: "doc", id: "stdlib/stdlib_overview" },

        { type: "doc", id: "stdlib/stdlib_string" },
        { type: "doc", id: "stdlib/stdlib_conv" },
        { type: "doc", id: "stdlib/stdlib_fmt" },

        { type: "doc", id: "stdlib/stdlib_io" },
        { type: "doc", id: "stdlib/stdlib_fs" },
        { type: "doc", id: "stdlib/stdlib_path" },

        { type: "doc", id: "stdlib/stdlib_mem" },
        { type: "doc", id: "stdlib/stdlib_bits" },

        { type: "doc", id: "stdlib/stdlib_math" },
        { type: "doc", id: "stdlib/stdlib_random" },

        { type: "doc", id: "stdlib/stdlib_time" },
        { type: "doc", id: "stdlib/stdlib_thread" },
        { type: "doc", id: "stdlib/stdlib_process" },

        { type: "doc", id: "stdlib/stdlib_net" },

        { type: "doc", id: "stdlib/stdlib_encoding" },
        { type: "doc", id: "stdlib/stdlib_compress" },
        { type: "doc", id: "stdlib/stdlib_crypto" },

        { type: "doc", id: "stdlib/stdlib_hash" },
        { type: "doc", id: "stdlib/stdlib_regex" },

        { type: "doc", id: "stdlib/stdlib_log" },
        { type: "doc", id: "stdlib/stdlib_test" },

        {
          type: "category",
          label: "Collections",
          items: [
            { type: "doc", id: "stdlib/collections/stdlib_collections_vec" },
            { type: "doc", id: "stdlib/collections/stdlib_collections_map" },
            { type: "doc", id: "stdlib/collections/stdlib_collections_set" }
          ]
        },

        { type: "doc", id: "stdlib/stdlib_ascii" },
        { type: "doc", id: "stdlib/stdlib_os" }
      ]
    },

    {
      type: "category",
      label: "FFI",
      items: [
        { type: "doc", id: "ffi/ffi_overview" },
        { type: "doc", id: "ffi/ffi_calling-c" },
        { type: "doc", id: "ffi/ffi_c-strings" },
        { type: "doc", id: "ffi/ffi_structs-abi" },
        { type: "doc", id: "ffi/ffi_linking" }
      ]
    },

    {
      type: "category",
      label: "Compiler",
      items: [
        { type: "doc", id: "compiler/compiler_semantic-db" }
      ]
    },

    {
      type: "category",
      label: "Advanced",
      items: [
        { type: "doc", id: "advanced/advanced_memory-model" },
        { type: "doc", id: "advanced/advanced_intrinsics" },
        { type: "doc", id: "advanced/advanced_optimization" },
        { type: "doc", id: "advanced/advanced_compiler-internals" },
        { type: "doc", id: "advanced/advanced_extending" },
        { type: "doc", id: "advanced/advanced_ownership-migration" }
      ]
    },

    {
      type: "category",
      label: "Reference",
      items: [
        { type: "doc", id: "reference/reference_keywords" },
        { type: "doc", id: "reference/reference_operator-precedence" },
        { type: "doc", id: "reference/reference_builtins" },
        { type: "doc", id: "reference/reference_type-methods" },
        { type: "doc", id: "reference/reference_grammar" },
        { type: "doc", id: "reference/reference_changelog" }
      ]
    },

    {
      type: "category",
      label: "Tools",
      items: [
        { type: "doc", id: "tools/tools_helpc" }
      ]
    }
  ]
};

export default sidebars;
