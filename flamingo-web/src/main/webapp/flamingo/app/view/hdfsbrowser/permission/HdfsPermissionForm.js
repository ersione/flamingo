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
Ext.define('Flamingo.view.hdfsbrowser.permission.HdfsPermissionForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.HdfsPermissionFormPanel',

    reference: 'hdfsPermission',
    bodyPadding: 10,
    items: [
        {
            border: false,
            layout: {
                type: 'vbox',
                align: 'stretch',
                pack: 'center'
            },
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Owner and Group',
                    reference: 'ownershipField',
                    flex: 1,
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                        pack: 'center'
                    },
                    defaults: {
                        labelAlign: 'right',
                        anchor: '100%',
                        labelWidth: 60
                    },
                    padding: '15 50 10 10',
                    items: [

                        {
                            xtype: 'textfield',
                            name: 'owner',
                            reference: 'owner',
                            value: '',
                            fieldLabel: 'Owner'
                        },
                        {
                            xtype: 'textfield',
                            name: 'group',
                            reference: 'group',
                            value: '',
                            fieldLabel: 'Group'
                        },
                        {
                            xtype: 'checkboxfield',
                            reference: 'recursiveOwner',
                            name: 'recursiveOwner',
                            boxLabel: 'Apply All',
                            labelAlign: 'right',
                            style: 'margin-left:65px;',
                            uncheckedValue: 0,
                            inputValue: 1,
                            checked: false,
                            tip: 'Changes the ownership of all sub-directories and files in the selected path.',
                            listeners: {
                                render: function (checkbox) {
                                    Ext.create('Ext.tip.ToolTip', {
                                        target: checkbox.getEl(),
                                        html: checkbox.tip
                                    });
                                }
                            }
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: 'Authority',
                    flex: 1,
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                        pack: 'center'
                    },
                    defaults: {
                        labelAlign: 'right',
                        anchor: '100%',
                        labelWidth: 60
                    },
                    items: [
                        {
                            xtype: 'checkboxgroup',
                            style: 'margin-top:10px;',
                            fieldLabel: message.msg('fs.hdfs.common.owner'),
                            items: [
                                {
                                    xtype: 'checkboxfield',
                                    name: 'ownerRead',
                                    reference: 'ownerRead',
                                    boxLabel: message.msg('fs.hdfs.common.read'),
                                    uncheckedValue: 0,
                                    inputValue: 1
                                },
                                {
                                    xtype: 'checkboxfield',
                                    name: 'ownerWrite',
                                    reference: 'ownerWrite',
                                    boxLabel: message.msg('fs.hdfs.common.write'),
                                    uncheckedValue: 0,
                                    inputValue: 1
                                },
                                {
                                    xtype: 'checkboxfield',
                                    name: 'ownerExecute',
                                    reference: 'ownerExecute',
                                    boxLabel: message.msg('fs.hdfs.common.execute'),
                                    uncheckedValue: 0,
                                    inputValue: 1
                                }
                            ]
                        },
                        {
                            xtype: 'checkboxgroup',
                            fieldLabel: message.msg('fs.hdfs.common.group'),
                            items: [
                                {
                                    xtype: 'checkboxfield',
                                    name: 'groupRead',
                                    reference: 'groupRead',
                                    boxLabel: message.msg('fs.hdfs.common.read'),
                                    uncheckedValue: 0,
                                    inputValue: 1
                                },
                                {
                                    xtype: 'checkboxfield',
                                    name: 'groupWrite',
                                    reference: 'groupWrite',
                                    boxLabel: message.msg('fs.hdfs.common.write'),
                                    uncheckedValue: 0,
                                    inputValue: 1
                                },
                                {
                                    xtype: 'checkboxfield',
                                    name: 'groupExecute',
                                    reference: 'groupExecute',
                                    boxLabel: message.msg('fs.hdfs.common.execute'),
                                    uncheckedValue: 0,
                                    inputValue: 1
                                }
                            ]
                        },
                        {
                            xtype: 'checkboxgroup',
                            reference: 'otherCheckGroup',
                            fieldLabel: message.msg('fs.hdfs.common.other'),
                            items: [
                                {
                                    xtype: 'checkboxfield',
                                    name: 'otherRead',
                                    reference: 'otherRead',
                                    boxLabel: message.msg('fs.hdfs.common.read'),
                                    uncheckedValue: 0,
                                    inputValue: 1
                                },
                                {
                                    xtype: 'checkboxfield',
                                    name: 'otherWrite',
                                    reference: 'otherWrite',
                                    boxLabel: message.msg('fs.hdfs.common.write'),
                                    uncheckedValue: 0,
                                    inputValue: 1
                                },
                                {
                                    xtype: 'checkboxfield',
                                    name: 'otherExecute',
                                    reference: 'otherExecute',
                                    boxLabel: message.msg('fs.hdfs.common.execute'),
                                    uncheckedValue: 0,
                                    inputValue: 1
                                }
                            ]
                        },
                        {
                            xtype: 'checkboxfield',
                            reference: 'recursivePermission',
                            name: 'recursivePermission',
                            boxLabel: message.msg('fs.hdfs.common.recursive'),
                            labelAlign: 'right',
                            style: 'margin-left:69px;margin-bottom:15px;',
                            uncheckedValue: 0,
                            inputValue: 1,
                            checked: false,
                            tip: message.msg('fs.hdfs.common.recursivePermission.tip'),
                            listeners: {
                                render: function (checkbox) {
                                    Ext.create('Ext.tip.ToolTip', {
                                        target: checkbox.getEl(),
                                        html: checkbox.tip
                                    });
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
});
