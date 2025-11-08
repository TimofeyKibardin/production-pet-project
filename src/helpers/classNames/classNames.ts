// Record - в качестве ключа string
type Mods = Record<string, boolean | string>

export function classNames(
    cls: string, mods: Mods, additional: string[]
): string {
    return [
        cls,
        ...additional,
        // Фильтрация false классов и маппинг оставшихся классов в строку
        ...Object.entries(mods)
            .filter(([value]) => Boolean(value))
            .map(([cls]) => cls)
    ].join(' ');
}