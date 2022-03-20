const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AdminPermissionSchema = new Schema({
    adminId: {
        type: Schema.Types.ObjectId,
        ref: "admins"
    },
    read: {
        type: Boolean,
        default: false
    },
    update: {
        type: Boolean,
        default: false
    },
    delete: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

const adminPermissionModel = mongoose.model('AdminPermission', AdminPermissionSchema);

module.exports = adminPermissionModel;
