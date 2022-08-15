const columnDefs = [
    {
        "cellRenderer": "agGroupCellRenderer",
        "cellRendererParams": {
            "suppressCount": true,
            "suppressDoubleClickExpand": true,
            "suppressEnterExpand": true,
            "isPinnedVistaEnabled": true
        },
        "field": "display_id",
        "suppressMovable": true,
        "suppressSizeToFit": false,
        "width": null,
        "lockVisible": true,
        "minWidth": 300,
        "pinned": "left",
        "resizable": false,
        "headerName": "ID",
        "refData": {}
    },
    {
        "cellRenderer": "agGroupCellRenderer",
        "field": "tags",
        "suppressMovable": true,
        "suppressSizeToFit": false,
        "width": null,
        "hide": false,
        "maxWidth": 220,
        "minWidth": 150,
        "resizable": true,
        "headerName": "Tags",
        "refData": {
            "isMultiSelect": true
        }
    },
    {
        "cellRenderer": "agGroupCellRenderer",
        "field": "priority",
        "suppressMovable": true,
        "suppressSizeToFit": false,
        "width": null,
        "maxWidth": 90,
        "resizable": false,
        "headerName": "Priority",
        "refData": {},
        "sortable": true,
        "hide": false
    },
    {
        "cellRenderer": "agGroupCellRenderer",
        "field": "rev_oid",
        "suppressMovable": true,
        "suppressSizeToFit": false,
        "width": null,
        "hide": true,
        "maxWidth": 240,
        "minWidth": 160,
        "headerName": "Rev Org",
        "refData": {
            "isMultiSelect": false
        },
        "sortable": false
    },
    {
        "cellRenderer": "agGroupCellRenderer",
        "field": "stage",
        "suppressMovable": true,
        "suppressSizeToFit": false,
        "width": null,
        "maxWidth": 160,
        "resizable": false,
        "headerName": "Stage",
        "refData": {},
        "sortable": true,
        "hide": false
    },
    {
        "cellRenderer": "agGroupCellRenderer",
        "field": "owned_by_ids",
        "suppressMovable": true,
        "suppressSizeToFit": false,
        "width": null,
        "maxWidth": 100,
        "headerName": "Owner",
        "refData": {
            "isMultiSelect": true
        },
        "hide": true
    },
    {
        "cellRenderer": "agGroupCellRenderer",
        "field": "estimated_effort_hours",
        "suppressMovable": true,
        "suppressSizeToFit": false,
        "width": null,
        "hide": true,
        "maxWidth": 90,
        "headerName": "Effort",
        "refData": {}
    },
    {
        "cellRenderer": "agGroupCellRenderer",
        "field": "primary_part_id",
        "suppressMovable": true,
        "suppressSizeToFit": false,
        "width": null,
        "hide": true,
        "maxWidth": 120,
        "headerName": "Part",
        "refData": {}
    },
    {
        "field": "secondary_part_id",
        "suppressMovable": true,
        "suppressSizeToFit": false,
        "width": null,
        "hide": true,
        "maxWidth": 120,
        "headerName": "Secondary Part",
        "refData": {}
    },
    {
        "cellRenderer": "agGroupCellRenderer",
        "field": "created_by_id",
        "suppressMovable": true,
        "suppressSizeToFit": false,
        "width": null,
        "hide": true,
        "maxWidth": 120,
        "headerName": "Created by",
        "refData": {
            "isSystemGenerated": true
        }
    },
    {
        "cellRenderer": "agGroupCellRenderer",
        "field": "created_date",
        "suppressMovable": true,
        "suppressSizeToFit": false,
        "width": null,
        "hide": true,
        "maxWidth": 120,
        "headerName": "Created date",
        "refData": {
            "isSystemGenerated": true
        },
        "sortable": true
    },
    {
        "cellRenderer": "agGroupCellRenderer",
        "field": "target_close_date",
        "suppressMovable": true,
        "suppressSizeToFit": false,
        "width": null,
        "hide": true,
        "maxWidth": 120,
        "headerName": "Completion date",
        "refData": {}
    },
    {
        "cellRenderer": "agGroupCellRenderer",
        "field": "modified_date",
        "suppressMovable": true,
        "suppressSizeToFit": false,
        "width": null,
        "hide": true,
        "maxWidth": 120,
        "headerName": "Modified date",
        "refData": {
            "isSystemGenerated": true
        },
        "sortable": true
    },
    {
        "cellRenderer": "agGroupCellRenderer",
        "field": "severity",
        "suppressMovable": true,
        "suppressSizeToFit": false,
        "width": null,
        "hide": true,
        "headerName": "Severity",
        "refData": {},
        "sortable": true
    },
    {
        "cellRenderer": "agGroupCellRenderer",
        "field": "impact",
        "suppressMovable": true,
        "suppressSizeToFit": false,
        "width": null,
        "hide": true,
        "headerName": "Impact",
        "refData": {},
        "sortable": true
    },
    {
        "cellRenderer": "agGroupCellRenderer",
        "field": "project_type",
        "suppressMovable": true,
        "suppressSizeToFit": false,
        "width": null,
        "hide": true,
        "headerName": "Project type",
        "refData": {},
        "sortable": true
    },
    {
        "cellRenderer": "agGroupCellRenderer",
        "field": "channel",
        "suppressMovable": true,
        "suppressSizeToFit": false,
        "width": null,
        "hide": true,
        "headerName": "Channel",
        "refData": {},
        "sortable": true
    }
]

export default columnDefs