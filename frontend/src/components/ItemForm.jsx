import { useState } from 'react';
import { createItem } from '../api';

export default function ItemForm({ onItemAdded }) {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createItem(formData);
            setFormData({ name: '', description: '', price: '' });
            onItemAdded();
        } catch (error) {
            console.error("Error adding item:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h2>Add New Item</h2>
            <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                style={{ padding: '0.5rem' }}
            />
            <textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
                style={{ padding: '0.5rem' }}
            />
            <input
                type="number"
                placeholder="Price"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                required
                style={{ padding: '0.5rem' }}
            />
            <button type="submit" style={{ padding: '0.7rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Add Item
            </button>
        </form>
    );
}