# The 3 AM Commit Message

[![Bounty](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
[![Rank](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/emasinves0-commits/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/rank.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
[![Reward](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/emasinves0-commits/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/reward.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)

A one-line entry: the commit message you write at 3 AM after making everything look fine.

## The entry

```
fix: deleted prod at 3 AM, then fixed the tests to pass, the metrics to green, and the backup to exist — prod remains deleted
```

125 characters, 127 bytes (UTF-8).

## Run

```
node main.ts
```

`main.ts` validates the line (non-blank, 1–200 characters), creates `/output` if needed, and writes `/output/entry.txt` as UTF-8 with no trailing newline. It prints the line, its character count and its byte count. It uses only `node:fs` and `node:path`.
