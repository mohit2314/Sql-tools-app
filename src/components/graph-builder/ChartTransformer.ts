enum ChartType {
    Bar = 'bar-chart',
    Line = 'line-chart',
    Area = 'area-chart',
    Pie = 'pie-chart',
    HorizontalBar = 'horizontal-bar-chart',
    Heatmap = 'heatmap',
    Bubble = 'bubble',
    MultiBar = 'multiBar',
    StackedBar = 'stackedBar',
    MultiLine = 'multiLine',
}

export const dataTransformer = (chartType: ChartType, selectedDataset: { rows: [], columns: [] }, dimensionsArr: { selectedDimension: {} }[], selectedDataColumn: {}) => {
    const selectedDatasetValue = selectedDataset;
    if (!selectedDatasetValue) {
        console.warn('No dataset selected');
        return;
    }

    const { columns, rows } = selectedDatasetValue;

    // Get the column names for the selected dimensions and data column
    const dimensionColumns = dimensionsArr.map(
        (dimension) => dimension.selectedDimension.name
    );
    const dataColumnName = selectedDataColumn.name;

    // Find the column indices for the selected dimensions and data column
    const dimensionColumnIndices = dimensionColumns.map((columnName) =>
        columns.findIndex((column) => column.name === columnName)
    );
    const dataColumnIndex = columns.findIndex(
        (column) => column.name === dataColumnName
    );

    // Check if all selected columns are valid
    const invalidIndices = [
        ...dimensionColumnIndices,
        dataColumnIndex,
    ].filter((index) => index === -1);
    if (invalidIndices.length > 0) {
        console.warn('Invalid column selection');
        return;
    }

    switch (chartType) {
        case ChartType.Bar:
        case ChartType.Line:
        case ChartType.Area:
        case ChartType.Pie:
        case ChartType.HorizontalBar:
            return formatForSingleDimension(
                dimensionColumnIndices[0],
                dataColumnIndex,
                columns,
                rows
            );
        case ChartType.Heatmap:
        case ChartType.Bubble:
        case ChartType.MultiBar:
        case ChartType.StackedBar:
        case ChartType.MultiLine:
            return formatForMultiDimension(
                dimensionColumnIndices,
                dataColumnIndex,
                columns,
                rows
            );
        default:
            console.warn('Unsupported chart type');
            return;
    }
};

const formatForSingleDimension = (
    dimensionColumnIndex: number,
    dataColumnIndex: number,
    columns: any[],
    rows: any[]
) => {
    // Format data for charts with a single dimension ( bar, line, area, pie)
    const formattedData = rows.reduce((acc, row) => {
        const dimension = row[columns[dimensionColumnIndex].name];
        const value = row[columns[dataColumnIndex].name];

        acc.push({ dimension, value });

        return acc;
    }, []);

    const dimensions = [columns[dimensionColumnIndex].name, columns[dataColumnIndex].name];
    const source = formattedData.map((item) => [item.dimension, item.value]);

    return { dimensions, source };
};

const formatForMultiDimension = (
    dimensionColumnIndices: number[],
    dataColumnIndex: number,
    columns: any[],
    rows: any[]
) => {
    // Format data for charts with multiple dimensions ( heatmap, bubble, multiBar, stackedBar, multiLine)
    const dimensions = [
        ...dimensionColumnIndices.map((index) => columns[index].name),
        columns[dataColumnIndex].name,
    ];
    const source = rows.map((row) => {
        const rowData = [
            ...dimensionColumnIndices.map((index) => row[columns[index].name]),
            row[columns[dataColumnIndex].name],
        ];
        return rowData;
    });

    return { dimensions, source };
};

