# The 4AM Commit

[![make.fun](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d.svg)](https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)
[![rank](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d/mazireal/4am-commit-line/rank.svg)](https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)
[![reward](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d/mazireal/4am-commit-line/reward.svg)](https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)

A tiny Node program that writes the 4AM commit message for the make.fun
bounty [u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d](https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)
by [@mazireal](https://github.com/mazireal).

> fix: fixed the bug I introduced fixing the last bug. The sequel is already in production.

## How to run

Requires Node 22 (stdlib only, no dependencies):

```sh
MAKEFUN_OUTPUT_DIR=/tmp/4am-commit-output node --experimental-strip-types main.ts
```

This writes exactly one line (89 characters, no trailing newline) to
`<MAKEFUN_OUTPUT_DIR>/entry.txt`. If `MAKEFUN_OUTPUT_DIR` is not set, it
defaults to `/output`.
