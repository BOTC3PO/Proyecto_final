import re


def extract_blocks(text):
    """Robust fenced-block extractor: opening fence may carry a language tag
    (``` or ```yaml), closing fence must be bare ``` on its own line."""
    lines = text.split("\n")
    blocks = []
    i = 0
    n = len(lines)
    while i < n:
        if re.match(r"^```\w*\s*$", lines[i]):
            start = i + 1
            j = start
            while j < n and lines[j].strip() != "```":
                j += 1
            if j < n:
                blocks.append("\n".join(lines[start:j]))
                i = j + 1
                continue
        i += 1
    return blocks


def extract_blocks_with_spans(text):
    """Like extract_blocks but also returns (start_char, end_char) of each
    block's content span within `text`, for in-place replacement."""
    lines = text.split("\n")
    offsets = [0]
    for l in lines:
        offsets.append(offsets[-1] + len(l) + 1)
    blocks = []
    i = 0
    n = len(lines)
    while i < n:
        if re.match(r"^```\w*\s*$", lines[i]):
            start = i + 1
            j = start
            while j < n and lines[j].strip() != "```":
                j += 1
            if j < n:
                content = "\n".join(lines[start:j])
                start_char = offsets[start]
                end_char = offsets[j] - 1
                blocks.append((content, start_char, end_char))
                i = j + 1
                continue
        i += 1
    return blocks
