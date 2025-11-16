// Record - в качестве ключа string
type Mods = Record<string, boolean | string>

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: string[] = []
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        // Фильтрация false классов и маппинг оставшихся классов в строку
        ...Object.entries(mods)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .filter(([_, value]) => Boolean(value))
            .map(([key]) => key)
    ].join(" ");
}