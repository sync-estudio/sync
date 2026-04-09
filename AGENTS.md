### Commit standardization

- A subtask is a single testable deliverable unit (for example, one endpoint, one flow, or one migration).
- After each completed subtask, create one comprehensive commit that includes all related changes for that subtask.
- Avoid micro-commits for tiny intermediate edits; commit when the subtask is complete and coherent.
- Do not mix unrelated subtasks in the same commit.
- Commit message format is mandatory:
  `feature|chore|fix|update(<one-word-brief-resume>): <message>`
- `<one-word-brief-resume>` must be exactly one word that identifies the scope (for example: `auth`, `plays`, `follows`).
# TypeScript Rules

### Type Conventions

- Never parse, infer, cast, or rewrite a TypeScript type as `any` unless the code is explicitly modeling a generic that requires it.
- Prefer concrete DOM types, unions, generics, `unknown`, or narrow type guards instead of `any`.
