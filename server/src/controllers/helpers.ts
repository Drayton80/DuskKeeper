import { ParsedQs } from "qs";

interface SearchParams {
  reqQuery?: string | ParsedQs | (string | ParsedQs)[];
  reqPage?: string | ParsedQs | (string | ParsedQs)[];
  reqLimit?: string | ParsedQs | (string | ParsedQs)[];
  reqFilter?: string | ParsedQs | (string | ParsedQs)[];
  reqSort?: string | ParsedQs | (string | ParsedQs)[];
}

interface ParsedSearchParams {
  query?: string;
  page: number;
  limit: number;
  filter?: string[];
  sort?: string[];
}

function parseFilterString(filterStr?: string): string[] | undefined {
  if (!filterStr) return undefined;

  try {
    // Handle multiple filters
    // Format: type = action AND category = spell OR traits IN [magical, fire]
    const filters: string[] = [];

    // Split by OR first
    const orParts = filterStr.split(" OR ");

    orParts.forEach((orPart) => {
      // Split by AND
      const andParts = orPart.split(" AND ");

      if (andParts.length > 1) {
        // Multiple conditions joined by AND
        filters.push(andParts.join(" AND "));
      } else {
        // Single condition
        filters.push(orPart.trim());
      }
    });

    return filters;
  } catch (error) {
    console.warn("Failed to parse filter string:", error);
    return undefined;
  }
}

function parseSortString(sortStr?: string): string[] | undefined {
  if (!sortStr) return undefined;

  try {
    // Format: name:asc,type:desc
    return sortStr.split(",").map((s) => s.trim());
  } catch (error) {
    console.warn("Failed to parse sort string:", error);
    return undefined;
  }
}

export function filterDefaultParams({
  reqQuery,
  reqPage,
  reqLimit,
  reqFilter,
  reqSort,
}: SearchParams): ParsedSearchParams {
  const query = typeof reqQuery === "string" ? reqQuery : undefined;
  const pageNumber = reqPage ? parseInt(reqPage as string, 10) : 1;
  const limitNumber = reqLimit ? parseInt(reqLimit as string, 10) : 20;

  const page = Math.max(1, pageNumber);
  const limit = Math.min(Math.max(1, limitNumber), 100);

  const filter =
    typeof reqFilter === "string" ? parseFilterString(reqFilter) : undefined;
  const sort =
    typeof reqSort === "string" ? parseSortString(reqSort) : undefined;

  return { query, page, limit, filter, sort };
}
