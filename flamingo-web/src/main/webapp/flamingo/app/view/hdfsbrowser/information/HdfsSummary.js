/*
 * Copyright (C) 2011  Flamingo Project (http://www.cloudine.io).
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

Ext.define('Flamingo.view.hdfsbrowser.information.HdfsSummary', {
    extend: 'Ext.Panel',
    alias: 'widget.hdfsSummaryPanel',

    border: true,

    items: [
        {
            xtype: 'form',
            itemId: 'hdfsInformationForm',
            layout: {
                type: 'table',
                columns: 2,
                tableAttrs: {
                    style: {
                        width: '100%'
                    }
                }
            },
            bodyPadding: '5',
            defaults: {
                labelAlign: 'right',
                anchor: '100%',
                labelWidth: 150
            },
            items: [
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Hostname',
                    name: 'hostName'
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Port',
                    name: 'port'
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Total DFS Size',
                    name: 'total',
                    valueToRaw: function (value) {
                        if (value == undefined) return '';
                        return fileSize(value);
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Used Size of Non-DFS',
                    name: 'capacityUsedNonDFS',
                    valueToRaw: function (value) {
                        if (value == undefined) return '';
                        return fileSize(value);
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Used Size of DFS',
                    name: 'used',
                    valueToRaw: function (value) {
                        if (value == undefined) return '';
                        return fileSize(value);
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Remaining DFS Size',
                    name: 'free',
                    valueToRaw: function (value) {
                        if (value == undefined) return '';
                        return fileSize(value);
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Default Block Size',
                    name: 'defaultBlockSize',
                    valueToRaw: function (value) {
                        if (value == undefined) return '';
                        return fileSize(value);
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Total Blocks',
                    name: 'totalBlocks',
                    valueToRaw: function (value) {
                        if (value == undefined) return '';
                        return toCommaNumber(value);
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Total Files',
                    name: 'totalFiles',
                    valueToRaw: function (value) {
                        if (value == undefined) return '';
                        return toCommaNumber(value);
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Total Nodes',
                    name: 'all',
                    valueToRaw: function (value) {
                        if (value == undefined) return '';
                        return toCommaNumber(value);
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Live Nodes',
                    name: 'live',
                    valueToRaw: function (value) {
                        if (value == undefined) return '';
                        return toCommaNumber(value);
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Stale Nodes',
                    name: 'stale',
                    valueToRaw: function (value) {
                        if (value == undefined) return '';
                        return toCommaNumber(value);
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Unhealthy Nodes',
                    name: 'unhealthyNodes',
                    valueToRaw: function (value) {
                        if (value == undefined) return '';
                        return toCommaNumber(value);
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Dead Nodes',
                    name: 'dead',
                    valueToRaw: function (value) {
                        if (value == undefined) return '';
                        return toCommaNumber(value);
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Rebooted Nodes',
                    name: 'rebootedNodes',
                    valueToRaw: function (value) {
                        if (value == undefined) return '';
                        return toCommaNumber(value);
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Decommissioned Nodes',
                    name: 'decommissioning',
                    valueToRaw: function (value) {
                        if (value == undefined) return '';
                        return toCommaNumber(value);
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Threads',
                    name: 'threads',
                    valueToRaw: function (value) {
                        if (value == undefined) return '';
                        return toCommaNumber(value);
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Missing Blocks',
                    name: 'missingBlocks',
                    valueToRaw: function (value) {
                        if (value == undefined) return '';
                        return toCommaNumber(value);
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Corrupted Replicated Blocks',
                    name: 'corruptReplicatedBlocks',
                    valueToRaw: function (value) {
                        if (value == undefined) return '';
                        return toCommaNumber(value);
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Replicated Blocks',
                    name: 'underReplicatedBlocks',
                    valueToRaw: function (value) {
                        if (value == undefined) return '';
                        return toCommaNumber(value);
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Pending Replicated Blocks',
                    name: 'pendingReplicationBlocks',
                    valueToRaw: function (value) {
                        if (value == undefined) return '';
                        return toCommaNumber(value);
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Scheduled Replicated Blocks',
                    name: 'scheduledReplicationBlocks'
                }
            ]
        }
    ],
    viewConfig: {
        enableTextSelection: true,
        columnLines: true,
        stripeRows: true
    },
    tools: [
        {
            type: 'refresh',
            tooltip: 'Refresh',
            handler: 'onHdfsSummaryRefreshClick'
        }
    ]
});